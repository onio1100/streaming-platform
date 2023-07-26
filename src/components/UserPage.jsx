import Chat from "./Chat";
import avatar from "../assets/defult avatar.png";

export default function UserPage() {
    return(
        <section className="user">
            <div className="user__wraper--main">
                <div className="user__wraper--strem">
                    <div className="user__strem"></div>
                    <div className="user__info--small">
                        <div className="sinfo__wraper--avatar">
                            <img className="sinfo__avatar" src={avatar} alt="user avatar" />
                        </div>
                        <div className="sinfo__wraper--big">
                            <p className="sinfo__text--nick"></p>
                            <p className="sinfo__text--title"></p>
                            <p className="sinfo__text--category"></p>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
                <div className="user__info--medium">
                    <div className="minfo__wraper--big">
                        <p className="minfo__name">Informations about Kasix</p>
                        <p className="minfo__followers">574,1 k. <mark className="minfo__followers--gray">followers</mark></p>
                        <p className="minfo__description">Hej, jestem Kasia. Mam 25 lat. Na streamkach gram w różne gry ale czego mozecie się spodziewać na pewno to przyjemnej atmosfery i dużo dyskusji na wiele tematów! Enjoy</p>
                    </div>
                    <div className="minfo__wraper--small">
                        <a></a>
                    </div>
                </div>
            </div>
            <div className="user__wraper--chat">
                    <Chat></Chat>
            </div>
        </section>
    )
}