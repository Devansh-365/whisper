import bcrypt from "bcrypt";

export const authentication = async (
  salt: string,
  password: string
): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const random = () => bcrypt.genSaltSync(10);
