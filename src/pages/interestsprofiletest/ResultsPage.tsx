import React from "react";
import Container from "../../components/common/containers/Container.tsx";
import { InterestsTestResultsPageProps } from "../../components/common/types";
import { test_content_categories } from "../../common/data/test_content";
import { useLocation } from "react-router";
import { backgrounds, colors } from "../../common/data/colors.js";
import HeadingMedium from "../../components/common/HeadingMedium.jsx";
import ClearFix from "../../components/common/ClearFix.tsx";
import { Bar, ChartProps } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

export default function ResultsPage(props : InterestsTestResultsPageProps){


    const results : number[] = useLocation().state.results

    const testResults = calculateTestResults(results)
    

    const generateResultTable = () => {
        console.log(results)
        return (<Container margin={"auto"}
            htmlProps={{
                class : ["result-table"]
            }}
        >
            <Container htmlProps={{
                class : ["result-table-content"]
            }}
            display={"inline_block"}
            width={"60%"}
            margin={"auto"}

            >

            <table id = "result-table">
                <tbody>
                <tr>
                    <th><div className="td-content"></div></th> {/* first table cell empty*/}
                {test_content_categories.map(value => {
                    // for each category we make a cell with its letter
                    return <th>{value}</th>
                })}
                </tr>
            
                {test_content_categories.map((categoryLetter,categoryIndex) => {
                    // next we generate rows with answers provided
                    return(
                        generateResultRow(categoryIndex,categoryLetter)
                )
                })}
                <tr>
                <td className="td-bold "><div className="td-content"></div></td>
                {testResults.columnResult.map((value,index) => {
                    let classes = ["td-bold" ,"td-result"]
                    switch(testResults.interestDegrees[index]){
                        case 0: classes.push(backgrounds.red); break;
                        case 1: classes.push(backgrounds.blue); break;
                        case 2: classes.push(backgrounds.light_yellow); break;
                        case 3: classes.push(backgrounds.green); break;
                    }
                    return(
                        <td className={classes.join(" ")}>{value}</td>
                    )
                })}
                </tr>
                </tbody>
            </table>

            </Container>
            <Container htmlProps={{
                class : ["table-legend"]
            }}>
                <Container
                htmlProps={{
                    class : ["table-legend-item"]
                }}>
                    <div className="square light-gray-bg" style = {{display : "inline-block"}}>
                    </div>
                   <div className="legend-desc">zaznaczona odpowiedź 1</div>
                </Container>
                <Container
                htmlProps={{
                    class : ["table-legend-item"]
                }}>
                    <div className="square" style = {{display : "inline-block"}}>
                    </div>
                   <div className="legend-desc">zaznaczona odpowiedź 2</div>
                </Container>
                <Container
                htmlProps={{
                    class : ["table-legend-item"]
                }}>
                    <div className={"square " + degreeToBackgroundColor(0)} style = {{display : "inline-block"}}>
                    </div>
                   <div className="legend-desc">brak zainteresowania kategorią</div>
                </Container>
                <Container
                htmlProps={{
                    class : ["table-legend-item"]
                }}>
                    <div className={"square " + degreeToBackgroundColor(1)} style = {{display : "inline-block"}}>
                    </div>
                   <div className="legend-desc">słabe zainteresowanie kategorią</div>
                </Container>
                <Container
                htmlProps={{
                    class : ["table-legend-item"]
                }}>
                    <div className={"square " + degreeToBackgroundColor(2)} style = {{display : "inline-block"}}>
                    </div>
                   <div className="legend-desc">średnie zainteresowanie kategorią</div>
                </Container>
                <Container
                htmlProps={{
                    class : ["table-legend-item"]
                }}>
                    <div className={"square " + degreeToBackgroundColor(3)} style = {{display : "inline-block"}}>
                    </div>
                   <div className="legend-desc">duże zainteresowanie kategorią</div>
                </Container>
                
            </Container>

            <ClearFix/>

        </Container>)

    }

    const generateResultRow = (rowIndex : number,rowCategory: string) => { 
        let row = results.slice(rowIndex*10,rowIndex*10+10) 
        let classes = ["td-bold" ,"td-result"]
        switch(testResults.interestDegrees[rowIndex]){
            case 0: classes.push(backgrounds.red); break;
            case 1: classes.push(backgrounds.blue); break;
            case 2: classes.push(backgrounds.light_yellow); break;
            case 3: classes.push(backgrounds.green); break;
        }
        return (<tr>
            <td className="td-bold">{rowCategory}</td> {/** first cell in a row its its letter */}
            {/** with row index we iterate over results */}
            {}
            {row.map((value) => {
                return (<td className= {value ? undefined : "filled"}><div className="td-content"></div></td>)
            })}
            <td className={classes.join(" ")}>{testResults.rowResults[rowIndex]}</td>
        </tr>
    )



    }

    const generateChart = () => {
        let data : ChartData<"bar"> = {
            labels : test_content_categories,
            datasets : [
                {
                    data : testResults.totalResult,
                    backgroundColor : testResults.totalResult.map(e => {
                        if(e<5) return 'rgba(0,0,255,0.5)'
                        if(e<11) return'rgba(0,200,200,0.5)'
                        if(e<16) return 'rgba(0,200,0,0.5)'
                        return 'rgba(186, 242, 73,0.5)'
                    }),
                    label : "Uzyskane punkty"
                    
                }
            ],
            

        }
        let options : ChartOptions<"bar"> = {
            responsive : true,
            plugins:{
                title:{
                    display : true,
                    text: 'Wyniki testu',
                    font : {
                        size : 20,
                        family : "Raleway",
                        weight : "bold",
                        style : "italic",
                        
                    },
                    color : "red"
                },
                
                tooltip : {
                    callbacks : {
                        title : items => {
                            return items.map(value => {
                                return "Kategoria "+ value.label
                            })
                        },
                        footer : items => {
                            return items.map((value,index) => {
                                let sum = value.raw as number
                                if (sum < 5) return "Brak zainteresowania dla kategorii"
                                if (sum < 11) return "Niskie zainteresowanie dla kategorii"
                                if (sum < 16) return "Średnie zainteresowania dla kategorii"
                                return "Duże zainteresowanie dla kategorii"
                            })
                        },
                        label : item => {
                            return "Punkty: " +item.formattedValue;
                        }
                        
                    }
                },
                legend : {
                    display : false
                },
                
            },
            
            
        }
        return <Bar data={data} options={options}></Bar>
    }

    return <Container>
        <HeadingMedium>Wyniki testu</HeadingMedium>
       {
        // generate table
        
        generateResultTable()
       }
       <Container>
        
        { // print all results as text
        test_content_categories.map((value,index)=> {

            return <Container font={{
                size : "larger"
            }} margin={"20px auto"} width="fit-content">
                <b>Kategoria {value} : <span className= {degreeToTextColor(testResults.interestDegrees[index])}>{testResults.totalResult[index]}</span></b>
            </Container>
        })}
       </Container>

       {generateChart()}
    </Container>

}


function calculateTestResults(results : number[]){

    let rowResults=Array<number>(10).fill(0),
    columnResult = Array<number>(10).fill(0),
    totalResult = Array<number>(10).fill(0),
    interestDegrees = Array<number>(10).fill(0)

    results.forEach((value,index) => {
        let row = Math.floor(index/10)
        let column = index%10
        if(value == 0){
            columnResult[column]++
        }
        else rowResults[row]++
    })
    totalResult = totalResult.map<number>((_,index) =>{
        let sum = rowResults[index]+columnResult[index]
        if (sum < 5) interestDegrees[index] = 0; else
        if (sum < 11) interestDegrees[index] = 1; else
        if (sum < 16) interestDegrees[index] = 2; else
        interestDegrees[index] = 3;
        return sum
    })


 
    return {
        questionAnswers : results,
        rowResults,
        columnResult,
        interestDegrees,
        totalResult,
    }


}

function degreeToTextColor(degree){
    switch(degree){
        case 0: return colors.red;
        case 1: return colors.light_blue;
        case 2: return colors.light_yellow;
        case 3: return colors.green;
    }
}
function degreeToBackgroundColor(degree){
    switch(degree){
        case 0: return backgrounds.red;
        case 1: return backgrounds.light_blue;
        case 2: return backgrounds.light_yellow;
        case 3: return backgrounds.green;
    }
}