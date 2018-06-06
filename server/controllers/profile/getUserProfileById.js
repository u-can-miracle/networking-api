import { getUserProfileById } from '../../helpers'


export async function getUserProfileByIdCtrl(userProfileId){
	const profileReview = await getUserProfileById(userProfileId)

	return profileReview
}
