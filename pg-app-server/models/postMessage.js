import mongoose from 'mongoose';
const pgSchema=mongoose.Schema({
    pname: String,
    paddress: String,
    pfacilities: String,
    oname: String,
    oemail: String,
    ocontact: String,
    selectedfile: String,
}
);
export const Pg=mongoose.model('Pg',pgSchema);

const locationSchema=mongoose.Schema({
    lati:Number,
    long:Number,
    key:Number,
},);
export const locations=mongoose.model('locations',locationSchema);


