import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchService {

    public getMockResult(companyName: string): Observable<string> {

        let result = "";

        switch (companyName) {
            case 'Berkshire Hathaway': {
                console.log("Berkshire Hathaway", "case");
                result = "Berkshire Hathaway Inc. is an American multinational conglomerate holding company headquartered in Omaha, Nebraska, United States. The company wholly owns GEICO, Dairy Queen, BNSF Railway, Lubrizol, Fruit of the Loom, Helzberg Diamonds, Long & Foster, FlightSafety International, Pampered Chef, and NetJets, and also owns 38.6% of Pilot Flying J[2] and 26.7% of the Kraft Heinz Company, and significant minority holdings in American Express (17.15%), The Coca-Cola Company (9.4%), Wells Fargo (9.9%), IBM (6.9%), and Apple (2.5%)";
                break;
            }
            case 'McKesson': {
                result = "McKesson Corporation is an American company distributing pharmaceuticals at a retail sale level and providing health information technology, medical supplies, and care management tools. The company had revenues of $198.5 billion in 2017. McKesson is based in the United States and distributes health care systems, medical supplies and pharmaceutical products. Additionally, McKesson provides extensive network infrastructure for the health care industry; also, it was an early adopter of technologies like bar-code scanning for distribution, pharmacy robotics, and RFID tags. It is a Fortune Global 500 company, and the 5th[2] highest revenue generating company in the United States.";
                break;
            }
            case 'UnitedHealth Group': {
                result = "UnitedHealth Group Inc. is an American managed health care company based in Minnetonka, Minnesota. It is sixth in the United States on the Fortune 500.[2] UnitedHealth Group offers products and services through two operating businesses, UnitedHealthcare and Optum, both subsidiaries of UnitedHealth Group. Optum is a healthcare service arm of UnitedHealth Group and the largest healthcare IT company in the world by revenue ($184 billion in 2016). Together, Optum and Unitedhealthcare serve approximately 115 million individuals in 2016. In 2016, the company reported an operating income of $13 billion";
                break;
            }
            case 'CVS Health': {
                result = "CVS Health (previously CVS Corporation and CVS Caremark Corporation) is an American retail pharmacy and health care company headquartered in Woonsocket, Rhode Island. The company began in 1964 with three partners who grew the venture from a parent company, Mark Steven, Inc., that helped retailers manage their health and beauty aid product lines. The business began as a chain of health and beauty aid stores, but within several years, pharmacies were added. To facilitate growth and expansion, the company joined The Melville Corporation, which managed a string of retail businesses.";
                break;
            }

            case '': {
                result = "no result";
            }

            default: {
                break;
            }
        }

        return Observable.of(result);
    }

}