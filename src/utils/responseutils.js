const generateSuccessResponse = (successBool, dataObject, messageString) => {
    return {
        success:successBool,
        data:dataObject,
        message:messageString
    }
}

module.exports = generateSuccessResponse;