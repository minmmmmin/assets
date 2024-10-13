import Welcome from "./Welcome"
import Side from "./Sidebar";

export default function Main() {
    return (
        <main>
            <Welcome />
            <aside>
                <Side />
            </aside>
        </main>
    );
}