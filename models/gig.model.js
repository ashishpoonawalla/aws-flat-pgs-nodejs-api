import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      required: false,
      default: false,
    },
    area:{
      type: Number,
      required: false
    },   

    cover: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: false,
    },
    amenities: {
      type: [String],
      required: false,
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);
