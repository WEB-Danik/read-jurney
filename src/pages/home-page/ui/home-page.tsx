import {Header} from "../../../widgets/header";
import {FilterBooks} from "../../../features/filter-books";
import {RecommendedBooks} from "../../../widgets/recommended-books";

export const GeneralPage = () => {
  return (
      <div className="home_page">
          <Header />
          <FilterBooks/>
          <RecommendedBooks/>
      </div>
  );
}