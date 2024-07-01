import mongoose from "mongoose";

interface CategoryAttrs {
  categoriesTreeObj: string;
  categoriesList: string[];
}

interface CategoryModel extends mongoose.Model<CategoryDoc> {
  build(attrs: CategoryAttrs): CategoryDoc;
}

export interface CategoryDoc extends mongoose.Document {
  categoriesTreeObj: string;
  categoriesList: string[];
}

const categorySchema = new mongoose.Schema(
  {
    categoriesTreeObj: {
      type: String,
      required: true,
    },
    categoriesList: {
      type: Array<String>,
      required: true,
    },
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

categorySchema.statics.build = (attrs: CategoryAttrs) => {
  return new Category(attrs);
};

const Category = mongoose.model<CategoryDoc, CategoryModel>(
  "Category",
  categorySchema
);

export { Category };
