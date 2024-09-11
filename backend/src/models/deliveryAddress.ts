import mongoose from "mongoose";

interface DeliveryAddressAttrs {
  ownerId: string;
  name: string;
  surname: string;
  phone: string;
  place: string;
  streetName: string;
  streetNumber: string;
  post: string;
  postCode: string;
  voivodeship: string;
  commune: string;
}

interface DeliveryAddressModel extends mongoose.Model<DeliveryAddressDoc> {
  build(attrs: DeliveryAddressAttrs): DeliveryAddressDoc;
}

export interface DeliveryAddressDoc extends mongoose.Document {
  ownerId: string;
  name: string;
  surname: string;
  phone: string;
  place: string;
  streetName: string;
  streetNumber: string;
  post: string;
  postCode: string;
  voivodeship: string;
  commune: string;
}

const deliveryAddressSchema = new mongoose.Schema(
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
    phone: {
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
    voivodeship: {
      type: String,
      required: true,
    },
    commune: {
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

deliveryAddressSchema.statics.build = (attrs: DeliveryAddressAttrs) => {
  return new DeliveryAddress(attrs);
};

const DeliveryAddress = mongoose.model<
  DeliveryAddressDoc,
  DeliveryAddressModel
>("DeliveryAddress", deliveryAddressSchema);

export { DeliveryAddress };
