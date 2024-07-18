import React, { useState } from 'react';
import Box from './Box';

function Matrirx() {

    const [colors, setColors] = useState(Array(9).fill('white'));
    const [seq, setSeq] = useState([])

    const onBoxClick = (i) => {
        console.log(i + ' box clicked!!')

        // logic to change background color of a clicked box
        if (colors[i] === 'white') {
            const  newSeqOrder = [...seq, { id: i }];           
            setSeq(newSeqOrder)  //store the sequence clicks

            const newColor = [...colors];
            newColor[i] = 'green';
            setColors(newColor); // set the color to green


            // 9th clicked logic
            if (newSeqOrder.length === 9) {
                console.log(newSeqOrder)
                colorChangeSeq(newSeqOrder)
            }

        }
    }

    const colorChangeSeq = (order) => {
        console.log("color change sequence is clicked")

        order.forEach((ele, index) => {
            setTimeout(() => {
                setColors((preColor)=> {
                    const newColor = [...preColor]
                    newColor[ele.id] = 'orange';
                    return newColor;
                });
            }, 500 * (index + 1));
            console.log(colors)

        })

    }


    return (
        <div>

            <div className="row">
                <Box colors={colors[0]} onBoxClick={() => { onBoxClick(0) }} />
                <Box colors={colors[1]} onBoxClick={() => { onBoxClick(1) }} />
                <Box colors={colors[2]} onBoxClick={() => { onBoxClick(2) }} />
            </div>

            <div className="row">
                <Box colors={colors[3]} onBoxClick={() => { onBoxClick(3) }} />
                <Box colors={colors[4]} onBoxClick={() => { onBoxClick(4) }} />
                <Box colors={colors[5]} onBoxClick={() => { onBoxClick(5) }} />
            </div>

            <div className="row">
                <Box colors={colors[6]} onBoxClick={() => { onBoxClick(6) }} />
                <Box colors={colors[7]} onBoxClick={() => { onBoxClick(7) }} />
                <Box colors={colors[8]} onBoxClick={() => { onBoxClick(8) }} />
            </div>

        </div>
    )
}

export default Matrirx
