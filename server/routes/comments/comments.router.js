const express = require('express');
const { httpPostCourseComment, httpGetCourseComments, httpPostCourseReply } = require('./comments.controller');



const commentsRouter = express.Router();


commentsRouter.post('/new-comment',  httpPostCourseComment);
commentsRouter.post('/reply/:commentId',  httpPostCourseReply);
commentsRouter.get("/:courseId", httpGetCourseComments);




module.exports = commentsRouter;