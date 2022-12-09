import React from "react";
import PropTypes from "prop-types";
import css from "./Profile.module.css";

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

function Profile({ username, tag, location, avatar, stats }) {
	return (
		<div className={css.profile}>
			<div className={css.description}>
				<img src={avatar} alt="User avatar" className={css.avatar} />
				<p className={css.name}>{username}</p>
				<p className={css.tag}>{tag}</p>
				<p className={css.location}>{location}</p>
			</div>

			<ul className={css.stats}>
				<li className={css.followersList}>
					<span className={css.label}>Followers</span>
					<span className={css.quantity}>{stats.followers}</span>
				</li>
				<li className={css.viewsList}>
					<span className={css.label}>Views</span>
					<span className={css.quantity}>{stats.views}</span>
				</li>
				<li className={css.likesList}>
					<span className={css.label}>Likes</span>
					<span className={css.quantity}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	);
}

export default Profile;
