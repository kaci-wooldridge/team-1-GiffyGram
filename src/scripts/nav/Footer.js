export const Footer = () => {
    return `
        <footer class="footer">
            <div class="footer__item">
                Posts since
                <select id="yearSelection">
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                </select>
                <span id="postCount">[POSTCOUNT]<span>
            </div>
            <div class="footer__item">
                Posts by user
                <select class="userSelection">
                    <option>Ray Medrano</option>
                    <option>Mark Ellis</option>
                    <option>Daniella Agnoletti</option>
                    <option>Kimmy Bird</option>
                    <option>Emily Lemmon</option>
                </select>
            </div>
            <div class="footer__item">
                Show only favorites
                <input type="checkbox" id="showOnlyFavorites">
            </div>
       </footer> `
}