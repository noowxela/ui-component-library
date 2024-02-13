import React from 'react';
import './articleCard.css';

interface ArticleCardProps {
    /**
     * Is this the principal call to action on the page?
     */
    matchType?: boolean;
    /**
     * Is this the principal call to action on the page?
     */
    match_date?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Button contents
     */
    teamAName: string;
    /**
     * Button contents
     */
    teamALogoPath: string;
    /**
     * Button contents
     */
    teamBName: string;
    /**
     * Button contents
     */
    teamBLogoPath: string;
    /**
     * title contents
     */
    title: string;
    /**
     * description contents
     */
    description: string;
    /**
     * league_name contents
     */
    league_name: string;
    /**
     * date contents
     */
    date: string;
    /**
     * img contents
     */
    imgPath: string;
    /**
     * authorName contents
     */
    authorName: string;
    /**
     * authorAvatarPath contents
     */
    authorAvatarPath: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const ArticleCard: React.FC<ArticleCardProps> = ({ 
    matchType = true, match_date = false, size = 'medium', teamAName, teamALogoPath="", teamBName, teamBLogoPath="", backgroundColor, label, title, league_name, description, date, imgPath="", authorName="", authorAvatarPath="", ...props }) => {
    return (
        <div className={"articles_content"}>
            <div className={"image_small"}>
                <img src={imgPath} />
            </div>
            <div className={"details"}>

            <p className={"league"}
                style={{
                    fontSize: matchType? "":"0.8rem",
                    overflow: matchType? "":"hidden",
                    display: matchType? "":"-webkit-box",
                    WebkitLineClamp: matchType? "":"3",
                    // marginBottom: "16px",
                }}
            >
                {
                    matchType
                        ?league_name
                        :description

                }
            </p>
            {matchType?
                <div className={"teams"}>
                    <span className={"team"}> {teamAName} </span>
                    <span>{" "}VS{" "}</span>
                    <span className={"team"}> {teamBName} </span>
                </div>
                :null
            }
            <div className={"author"}>
                <div className={"details"}>
                    <img src={authorAvatarPath}/>
                    <span>{ authorName } </span>
                    <span> { date }</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ArticleCard;
