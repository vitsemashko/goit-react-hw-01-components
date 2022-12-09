import PropTypes from "prop-types";
import css from "./Statistics.module.css";

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	).isRequired,
};
function Statistics({ title, stats }) {
	return (
		<div className={css.statisticsContainer}>
			<section className={css.statistics}>
				{title && <h2 className={css.title}>{title}</h2>}

				<ul className={css.statList}>
					{stats.map((stat) => (
						<li
							className={title ? css.statListItem : css.statListItemNoTitle}
							style={{
								backgroundColor: getRandomHexColor(),
							}}
							key={stat.id}
						>
							<span className={css.label}>{stat.label}</span>
							<span className={css.percentage}>{stat.percentage}%</span>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
export default Statistics;
