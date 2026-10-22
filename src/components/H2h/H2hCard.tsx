import React from 'react';
import dayjs from "dayjs"; // Import Day.js

import './H2hCard.scss';

interface H2hCardProps {
    /**
     * The sportType
     */
    sportType?: 'football' | 'basketball';
    /**
 
    /**
     * Data related to head-to-head comparison
     */
    h2hdata?: Record<string, any>; // Assuming h2hdata is an object with any structure
    
    /**
     * Results mapped for display
     */
    mappedResult?: any[]; // Assuming mappedResult is an array of any type
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const H2hCard: React.FC<H2hCardProps> = ({ 
    sportType, h2hdata,  mappedResult, ...props }) => {
    return (
    <>
        <div className={"grid_container"}>
        <div>
            <div className={"left_section"}>
            <div className={"img_container"}>
                <img src={h2hdata?.match_info?.team_home?.logo}/>
            </div>
            <div>
                <p className={"team_name"}>
                {"[Home] "}
                {h2hdata?.match_info?.team_home?.name}
                </p>
                <div className={"Wl"}>
                <div>
                    <span className={"w"}>
                    {/* {t("w")}{" "} */}
                    W{" "}
                    </span>
                    <span className={"wno"}>
                    {h2hdata?.history?.home_history_statistic?.win}
                    </span>
                </div>
                <div>
                    <span className={"l"}>
                    {/* {t("l")}{" "} */}
                    L{" "}
                    </span>
                    <span className={"lno"}>
                    {h2hdata?.history?.home_history_statistic?.loss}
                    </span>
                </div>
                </div>
            </div>
            </div>
            <div className={"average"}>
            <p>{" Average"}</p>
            <p className={"goal_rate"}>
                {h2hdata?.history?.home_history_statistic?.goal_rate}
            </p>
            </div>
        </div>
        <div>
            <div className={"left_section"}>
            <div className={"img_container"}>
                <img
                src={h2hdata?.match_info?.team_away?.logo}
                />
            </div>
            <div>
                <p className={"team_name"}>
                {"[Away] "}
                {h2hdata?.match_info?.team_away?.name}
                </p>
                <div className={"Wl"}>
                <div>
                    <span className={"w"}>
                    {/* {t("w")}{" "} */}
                    W{" "}
                    </span>
                    <span className={"wno"}>
                    {h2hdata?.history?.away_history_statistic?.win}
                    </span>
                </div>
                <div>
                    <span className={"l"}>
                    {/* {t("l")}{" "} */}
                    L{" "}
                    </span>
                    <span className={"lno"}>
                    {h2hdata?.history?.away_history_statistic?.loss}
                    </span>
                </div>
                </div>
            </div>
            </div>

            <div className={"average"}>
            <p>{" Average"}</p>
            <p className={"goal_rate"}>
                {h2hdata?.history?.away_history_statistic?.goal_rate}
            </p>
            </div>
        </div>
        </div>

        {mappedResult?.map((el) => {
        return (
            <>
                <div className={"header"}>
                    <img
                    className={"headerimg"}
                    src={el?.competition?.logo}
                    />
                    { el?.competition?.name }
                </div>
                <table className={"table"}>
                    <tbody>
                    {el?.matches?.map((ell) => {
                        return (
                        <>
                            <tr style={{ margin: '10px 0' }}>
                            <td className={"date"} rowSpan={2}>
                                <p className={"first_line"}>
                                {dayjs(ell.match_time * 1000).format("MMM DD")}
                                </p>
                                <p className={"section_line"}>
                                {dayjs(ell.match_time * 1000).format("YYYY")}
                                </p>
                            </td>
                            <td
                                className={
                                ell?.team_home?.score > ell?.team_away?.score
                                ? `team_section win`
                                : `team_section`
                                }
                            >
                                <img
                                className={"img"}
                                src={ell?.team_home?.logo}
                                />
                                {ell?.team_home?.name}
                            </td>
                            <td rowSpan={2}>
                                {ell?.wdl == 1 ? (
                                <p className={`s_badge w`}>
                                    {/* {t("w")} */}
                                    W{" "}
                                </p>
                                ) : ell?.wdl == 0 ? (
                                <div className={`s_badge d`}>
                                    {/* {t("d")} */}
                                    D{" "}
                                </div>
                                ) : (
                                <div className={`s_badge l`}>
                                    {/* {t("l")} */}
                                    L{" "}
                                </div>
                                )}
                            </td>
                            {
                                sportType == "basketball"
                                ? 
                                <td className={
                                    ell?.team_home?.score > ell?.team_away?.score
                                    ? `score win`
                                    : `score`
                                }>
                                    { ell?.team_home?.score }
                                </td>
                                : sportType == "football"
                                    ? <td>
                                    { ell?.team_home?.ht_score }
                                    </td>
                                    : <td> "-" </td>
                            }
                            {
                                sportType == "football"
                                ?
                                <td className={"full_score"}>
                                { ell?.team_home?.score }
                                </td>
                                :null
                            }
                            </tr>
                            <tr className={"bottom"}>
                            <td 
                                className={
                                ell?.team_home?.score < ell?.team_away?.score
                                ? `team_section win`
                                : `team_section`
                                }
                            >
                                <img
                                className={"img"}
                                src={ell?.team_away?.logo}
                                />
                                { ell?.team_away?.name }
                            </td>
                            {
                                sportType == "basketball"
                                ? 
                                <td className={
                                    ell?.team_home?.score < ell?.team_away?.score
                                    ? `score win`
                                    : `score`
                                }>
                                    { ell?.team_away?.score }
                                </td>
                                : sportType == "football"
                                    ? <td>
                                    { ell?.team_away?.ht_score }
                                    </td>
                                    : <td> "-" </td>
                            }
                            {
                                sportType == "football"
                                ?
                                <td className={"full_score"}>
                                { ell?.team_away?.score }
                                </td>
                                :null
                            }
                            </tr>
                        </>
                        );
                    })}
                    </tbody>
                </table>
            </>
        );
        })}
    </>
    );
};

export default H2hCard;
