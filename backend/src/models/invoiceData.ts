import mongoose from "mongoose";

interface InvoiceDataAttrs {
  ownerId: string;
  name: string;
  surname: string;
  place: string;
  streetName: string;
  streetNumber: string;
  post: string;
  postCode: string;
  taxIdentificationNumber: string;
}

interface InvoiceDataModel extends mongoose.Model<InvoiceDataDoc> {
  build(attrs: InvoiceDataAttrs): InvoiceDataDoc;
}

export interface InvoiceDataDoc extends mongoose.Document {
  ownerId: string;
  name: string;
  surname: string;
  place: string;
  streetName: string;
  streetNumber: string;
  post: string;
  postCode: string;
  taxIdentificationNumber: string;
}

const invoiceDataSchema = new mongoose.Schema(
  {
    ownerId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    streetName: {
      type: String,
      required: true,
    },
    streetNumber: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    taxIdentificationNumber: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

invoiceDataSchema.statics.build = (attrs: InvoiceDataAttrs) => {
  return new InvoiceData(attrs);
};

const InvoiceData = mongoose.model<InvoiceDataDoc, InvoiceDataModel>(
  "InvoiceData",
  invoiceDataSchema
);

export { InvoiceData };
