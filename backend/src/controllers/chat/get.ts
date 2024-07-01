import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { Chat, ChatDoc } from "../../models/chat";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";

const router = express.Router();

router.get(
  "/api/chat/get/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const chat = await Chat.findById(req.params.id);

    if (!chat) {
      throw new NotFoundError();
    }

    const response: ResponseType<ChatDoc> = {
      status: "success",
      code: 201,
      message: "Chat returned successfully",
      data: chat,
    };

    res.send(response);
  }
);

export { router as showChatRouter };
