import { useState } from "react";
import { Bubble } from "../../svgs/Bubble";
import { NextBtn } from "../../svgs/Btns";
import  "./banner.css";

export const Banner = () => {
    const rightAnswer = "flock";

    const [selectedAnswer, setSelectedAnswer] = useState();
    const arr = ["flock", "herd", "circle", "pile", "clump", "army"];

    const onClick = (text) => {
        setSelectedAnswer(text);
    };

    const successFullAnswerCss = {
        background: "#5EBE00",
        border: "1px solid #478F00",
        boxShadow: "inset 0px 2px 0px #88ED39",
    };
    const errorAnswerCss = {
        background: "#D40000",
        border: " 1px solid #950000",
        boxShadow: "inset 0px 2px 0px #FF9191",
    };
    const alertCall = () => {
        alert("Under construction");
        return;
    };
    return (
        <div className="bannerParent">
            <div
                style={{
                    width: "60%",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {arr?.map((item, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                margin: "auto",
                                position: "relative",
                                top: index % 2 === 0 ? "-70px" : "0px",
                            }}
                        >
                            <Bubble
                                text={item}
                                onClick={onClick}
                                fill={
                                    item === selectedAnswer
                                        ? item === rightAnswer
                                            ? "rgba(144, 233, 0, 0.75)"
                                            : "rgba(255, 0, 0, 0.71)"
                                        : "white"
                                }
                            />
                        </span>
                    );
                })}
            </div>
            <div className="footerSectionParent">
                <div className="sentence">
                    <p style={{ color: "#3497A7" }}>Sentence 4/6</p>
                </div>
                <div className="footerSectionBox">
                    <div className="innerSection">
                        <p
                            style={{
                                color: "#3497A7",
                                marginTop: "40px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            A{" "}
                            <span
                                className="answerBox"
                                style={
                                    selectedAnswer
                                        ? selectedAnswer === rightAnswer
                                            ? successFullAnswerCss
                                            : errorAnswerCss
                                        : {}
                                }
                            >
                                <span
                                    style={{
                                        marginTop: "-3px",
                                    }}
                                >
                                    {selectedAnswer}
                                </span>
                            </span>{" "}
                            of unwashed bedsheets lay in the dark room.
                        </p>
                    </div>
                </div>
            </div>
            <div className="nextBtn" onClick={alertCall}>
                <NextBtn />
            </div>
        </div>
    );
};
