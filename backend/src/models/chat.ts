import mongoose from "mongoose";

interface ChatAttrs {
  id: string;
  client: {
    id: string;
    name: string;
    surname: string;
    reasonOrderId: string;
    reasonProductId: string;
  };
  serviceUserId: string;
  messages: {
    sentDate: string;
    fullName: string;
    message: string;
  }[];
}

interface ChatModel extends mongoose.Model<ChatDoc> {
  build(attrs: ChatAttrs): ChatDoc;
}

export interface ChatDoc extends mongoose.Document {
  id: string;
  client: {
    id: string;
    name: string;
    surname: string;
    reasonOrderId: string;
    reasonProductId: string;
  };
  serviceUserId: string;
  messages: {
    sentDate: string;
    fullName: string;
    message: string;
  }[];
}

const chatSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    client: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: Number, required: true },
        shortDescription: { type: String, required: true },
        reasonOrderId: { type: String, required: true },
        reasonProductId: { type: String, required: true },
      },
    ],
    serviceUserId: { type: String, required: true },
    messages: [
      {
        sentDate: { type: String, required: true },
        fullName: { type: String, required: true },
        message: { type: Number, required: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

chatSchema.statics.build = (attrs: ChatAttrs) => {
  return new Chat(attrs);
};

const Chat = mongoose.model<ChatDoc, ChatModel>("Chat", chatSchema);

export { Chat };
