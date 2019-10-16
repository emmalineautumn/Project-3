import React, {Component} from 'react';
import { Pager, Page } from "../components/Pagify";
class CreateCampaign extends Component {
    render(){
        return (
            <div className="container grey clearfix">
                <Pager paginate={true}>
                    <div>
                        Hello
                    </div>
                    <div>
                        goodbye
                    </div>
                    <div>
                        hey
                    </div>
                    <div>
                        see ya
                    </div>
                    <div>
                        guten tag
                    </div>
                    <div>
                        tchuess
                    </div>
                </Pager>
            </div>
        )
    }
}

export default CreateCampaign;