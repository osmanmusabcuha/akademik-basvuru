import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { users } from "../db/schema/users.js";
import { roles } from "../db/schema/roles.js";
import { userRoles } from "../db/schema/userRoles.js";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export const signUp = async (req, res) => {
  const { name, email, tcNo, password } = req.body;

  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.tcNo, tcNo));

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await db
      .insert(users)
      .values({
        name,
        email,
        tcNo,
        password: hashedPassword,
      })
      .returning();

    const userId = newUser[0].id;

    const defaultRole = await db
      .select()
      .from(roles)
      .where(eq(roles.name, "aday"));

    if (defaultRole.length > 0) {
      await db.insert(userRoles).values({
        userId,
        roleId: defaultRole[0].id,
      });
    }

    const token = jwt.sign(
      { id: userId, role: defaultRole[0].name },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN,
      }
    );

    newUser[0].role = defaultRole[0].name;

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        user: newUser[0],
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error checking user existence", error: error.message });
  }
};

// Sign In
export const signIn = async (req, res) => {
  const { tcNo, password } = req.body;

  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.tcNo, tcNo));

    if (existingUser.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, existingUser[0].password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userRole = await db
      .select()
      .from(userRoles)
      .innerJoin(roles, eq(userRoles.roleId, roles.id))
      .where(eq(userRoles.userId, existingUser[0].id));
    if (userRole.length > 0) {
      existingUser[0].role = userRole[0].roles.name;
    }

    const token = jwt.sign(
      { id: existingUser[0].id, role: existingUser[0].role },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN,
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: existingUser[0],
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error during login", error: error.message });
  }
};

export const signOut = async (req, res) => {
  res.status(200).json({ message: "Sign out successful" });
};
