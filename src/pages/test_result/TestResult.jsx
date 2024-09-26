import { test_content_categories } from "../../common/data/test_content"
import {useLocation} from 'react-router-dom'
import { Bar } from "react-chartjs-2"
import 'chart.js/auto'
import './TestResult.css'
import HeadingMedium from "../../react/common/components/heading/HeadingMedium.tsx"
import { color } from "chart.js/helpers"

export default function TestResult(_props){

    const location = useLocation()
    const testData = location.state.data
    const testAnswers = testData.answers
    const testResults = testData.results


    const generateResultTable = () => {
        console.log(testData)
        return (<div className="result-table-container">
            <table id = "result-table">
                <tbody>
                <tr>
                    <th></th>
                {test_content_categories.map(value => {
                    return <th>{value}</th>
                })}
                </tr>
                
                {test_content_categories.map((value,index) => {
                    return(
                        generateResultRow(index,value)
                )
                })}
                <tr>
                <td></td>
                {testResults[1].map(value => {
                    return(
                        <td className="td-bold td-result">{value}</td>
                    )
                })}
                </tr>
                </tbody>
            </table>
        </div>)

    }

    const generateResultRow = (rowIndex,rowCategory) => {  
        return (<tr>
            <td className="td-bold">{rowCategory}</td>
            {testAnswers[rowIndex].map((value,index) => {
                return (<td className= {value ? null : "filled"}></td>)
            })}
            <td className="td-bold td-result">{testResults[0][rowIndex]}</td>
        </tr>
    )

    }

    const generateResults = () => {
        return (
            <div className="results">
                <div className="results-heading">Wyniki testu</div>
                {test_content_categories.map((value,index) => {
                    return (
                        <div className="category-result">Kategoria {value}: {testResults[2][index]}</div>
                    )
                    
                })}
            </div>
        )
    }

    const labels = test_content_categories;
    const data = {
        labels,
        datasets : [
            {
                data: testResults[2],
                backgroundColor : testResults[2].map(e => {
                    if(e<5) return 'rgba(0,0,255,0.5)'
                    if(e<11) return'rgba(0,200,200,0.5)'
                    if(e<16) return 'rgba(0,200,0,0.5)'
                    return 'rgba(186, 242, 73,0.5)'
                })
            }
        ]
    }
    const options = {
        responsive : true,
        plugins:{
            title:{
                display : true,
                text: 'Wyniki testu',
                padding : {top : 100, bottom : 100}
            }
        }
    }
    

    return (<div className="content test-result">


        {generateResultTable()}

        {generateResults()}

        <HeadingMedium font={{color : "red"}}>Wyniki testu</HeadingMedium>

        <Bar data={data} options={options} />

        

    </div>)

}