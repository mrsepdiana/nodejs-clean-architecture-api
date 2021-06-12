import { responseHandler } from "../../utilities";

export const getUserList = (request: any, response: any) => {
  return  responseHandler(request, response)
  .success({
    status: 200, 
    message: "message", 
    data: [
      {id: 1, name: "user a"},
      {id: 2, name: "user b"}
    ]
  });
}