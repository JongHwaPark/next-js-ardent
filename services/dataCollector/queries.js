import {
    gql,
} from "@apollo/client";

const queryList = {
    'robots': gql`
        subscription Subscription {
            robots {
            name
            id
            ip
            ping
            status {
                pose {
                degree
                y
                x
                }
                schedule {
                x
                y
                degree
                }
                battery {
                voltage
                current
                percent
                chargeTime
                dischargeTime
                temperature
                }
            }
            }
        }    
    `,
}

export default queryList;