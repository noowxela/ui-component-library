import React from 'react';
import './articleCard.scss';

interface ArticleCardProps {
    /**
     * Is this the principal call to action on the page?
     */
    matchType?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * How large should the button be?
     */
    type?: 'ep' | 'dqj' ;
    /**
     * Button contents
     */
    teamAName: string;
    /**
     * Button contents
     */
    teamBName: string;
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
    matchType = true, size = 'medium', type, teamAName, teamBName, backgroundColor, title, league_name, description, date, imgPath="", authorName="", authorAvatarPath, ...props }) => {
    return (
        <div className={['articles_content', `articles_content--${type}`].join(' ')} style={{ backgroundColor }}>
            <div className={"image_small"}>
                <img src={imgPath} />
            </div>
            <div className={"details"}>
                <p className={"title"}>
                    {title}
                </p>
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
                {
                    matchType
                    ?<div className={"teams"}>
                        <span className={"team"}> {teamAName} </span>
                        <span>{" "}VS{" "}</span>
                        <span className={"team"}> {teamBName} </span>
                    </div>
                    :null
                }
                <div className={"author"}>
                    <p className={"details"}>
                        {
                            authorAvatarPath
                            ?<img src={authorAvatarPath}/>
                            :null
                        }
                        <span> { authorName } </span>
                    </p>
                    <p> { date }</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
