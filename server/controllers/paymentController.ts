import { Request, Response } from "express";

const checkout = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({ success: true });
};

export default { checkout };
