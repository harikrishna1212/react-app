import { action, observable } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'
class LoadingPracticeStore {
   @observable getAdminAPIStatus = API_INITIAL
   @observable getAdminAPIError = null
   @observable getUserAPIStatus = API_INITIAL
   @observable getUserAPIError = null
   @observable adminDetails = []
   @observable userDetails = []

   loadingApiService
   constructor(loadingServiceFixture) {
      this.loadingApiService = loadingServiceFixture
   }
   @action.bound
   getAdminDeatilsApi() {
      const adminPromise = this.loadingApiService.getAdminDeatils()

      return bindPromiseWithOnSuccess(adminPromise)
         .to(this.setAdminStatus, this.setAdminResponse)
         .catch(this.setAdminAPIError)
   }

   @action.bound
   setAdminStatus(apiResponse) {
      this.getAdminAPIStatus = apiResponse
   }
   @action.bound
   setAdminResponse(data) {
      
      this.adminDetails.push(data)
     
   }
   @action.bound
   setAdminAPIError(apiError) {
      this.getAdminAPIError = apiError
   }
   @action.bound
   getUserDetailsApi() {
      const userPromise = this.loadingApiService.getUserDetails()
      return bindPromiseWithOnSuccess(userPromise)
         .to(this.setUserStatus, this.setUserResponse)
         .catch(this.setUserAPIError)
   }
   @action.bound
   setUserStatus(apiResponse) {

      this.getUserAPIStatus = apiResponse
   }
   @action.bound
   setUserResponse(data) {
      this.userDetails.push(data)
   }
   @action.bound
   setUserAPIError(apiError) {
      this.getUserAPIError = apiError
   }
}
export default LoadingPracticeStore
