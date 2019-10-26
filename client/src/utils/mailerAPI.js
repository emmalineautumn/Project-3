import axios from 'axios';

export default {
    mailInvite: details => {
        return axios.post('/api/invitations/', details)
    }
}