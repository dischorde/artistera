




// // thinking
//   (formInput)
//   ProjectApiUtil.createProject({project: formInput.project}).then(
//     (proj) => {
//       const attachments = formInput.attachments
//       const createAttachments = (idx) => {
//         if (idx < attachments.length) {
//           AttachmentApiUtil.createAttachment(attachments[idx]).then(
//             createAttachments(idx + 1)
//           )
//         }
//         else (
//           dispatch(receiveProject)
//         )
//         createAttachments(0);
//       }
//     }
//   )
