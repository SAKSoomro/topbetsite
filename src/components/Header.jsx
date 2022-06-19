import '../index.css'

export default function Header(){
    return (
        <div>
        <div class="main-header">
        <div class="logo">topbet.tn</div>
        <div class="center-links">
            <ul>
                <li><a href="/">sports betting</a></li>
                <li><a href="/loadmore">live betting</a></li>
                <li><a href="/">games of skill</a></li>
                <li><a href="virtualgames">virtual games</a></li>
            </ul>
        </div>
        <div class="cright-links">
            <ul>
                <li><a class="join-button" href="/login">connect</a></li>
                <li><a class="login-button" href="/register">register</a></li>
            </ul>
        </div>
    </div>
        </div>
    );
}