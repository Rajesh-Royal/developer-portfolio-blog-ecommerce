import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";

const PostPagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    const useStyles = makeStyles((theme) => ({
        ul: {
            display: "flex",
            justifyContent: "center",
            "& li": {
                listStyle: "none",
                margin: "0px 15px",
                "& a": {
                    color: theme.palette.info.main,
                    background: theme.palette.secondary.main,
                    padding: "5px 10px",
                    borderRadius: "50%",
                    fontSize: 16,
                    "&:hover": {
                        color: theme.palette.primary.main
                    }
                }
            }
        }
    }));
    const classes = useStyles();

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <React.Fragment>
            <ul className={classes.ul}>
                {pageNumbers.map(number => (
                    <li className="page-item" key={number}>
                        <Typography variant="body1" color="textPrimary">
                            <Link onClick={() => paginate(number)} to={"#"}>
                                {number}
                            </Link>
                        </Typography>

                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
};

export default PostPagination;