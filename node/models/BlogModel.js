import db from "../database/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    createAt: {type: DataTypes.DATE},
    updateAt: {type: DataTypes.DATE},
},{
        timestamps: false
    });


export default BlogModel