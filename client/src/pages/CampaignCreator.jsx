import React, {Component} from 'react';
import Pager from '../components/Pager';

class CreateCampaign extends Component {
    state = {
        page: 0
    }

    handlePageUp = () => {
        this.setState(prevState => ({page: ++prevState.page}))
    }

    render(){
        return (
            <Pager>
                <div>
                    Hello
                </div>
                <div>
                    goodbye
                </div>
            </Pager>
        )
    }
}

export default CreateCampaign;