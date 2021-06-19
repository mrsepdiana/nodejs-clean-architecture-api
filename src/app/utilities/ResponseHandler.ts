
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
const responseHandler = (_: any, response: any) => {

  /**
   * Success Handler
   * @param param ResponseHandlerType
   * @returns success response
   */
  const success = ({data, message, status }: ResponseHandlerType) => {
    return response.status(status).json({status: status, message, data})
  }

   /**
   * Error Handler
   * @param param ResponseHandlerType
   * @returns Error response
   */
  const error = ({data, message, status, errors }: ResponseHandlerType) => {
    return response.status(status).json({status: status, message, errors, data})
  }

  return { success, error }
}

export default responseHandler