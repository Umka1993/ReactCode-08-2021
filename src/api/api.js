import * as axios from "axios";




const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '73afdda7-f844-451f-8472-8ba3109395ff'
    }
});

export const usersApi = {
    getUsers(currentPage, pageSize){
        return(
            instance.get(`users?page=${currentPage}&count=${pageSize}`,
                {withCredentials: true}).then(response => {
                return response.data
            })
        )},
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getProfile(userId){
        console.warn('obsolete method. Please profileApi object.')
         return profileApi.getProfile(userId)
    },
};



export const profileApi = {
    getProfile(userId){
        return instance.get(`profile/`+userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status){
        return instance.put('profile/status/', {status: status});
     },
    savePhoto(photoFile){
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};



export const authApi = {

    me(){
        return  instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        // debugger
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }

};



export const getUsers2 = (currentPage, pageSize)=>{
    return(
        instance.get(`follow?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}).then(response => {
            return response.data
        })
    )}
