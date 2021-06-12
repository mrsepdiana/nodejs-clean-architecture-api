
type ResponseHandlerType = {
  status?: number;
  message?: string;
  errors?: any;
  data?: any
}

/**
 * Response Handler
 * @param request request 
 * @param response response
 * @returns success or error handler
 */
const responseHandler = (request: any, response: any) => {

  /**
   * Success Handler
   * @param param ResponseHandlerType
   * @returns success response
   */
  const success = ({data, message, status }: ResponseHandlerType) => {
    return response.json({status: 200, message, data})
  }

   /**
   * Error Handler
   * @param param ResponseHandlerType
   * @returns Error response
   */
  const error = ({data, message, status, errors }: ResponseHandlerType) => {
    return response.json({status: status, message, errors, data})
  }

  return { success, error }
}

export default responseHandler