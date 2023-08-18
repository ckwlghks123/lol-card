import useActions from "./useActions";
import { css, styled } from "styled-components";
import top from "./position/top.svg";
import jgl from "./position/jgl.svg";
import mid from "./position/mid.svg";
import spt from "./position/spt.svg";
import bot from "./position/bot.svg";

const flags = {
  Germany: "/flags/germany.png",
  Spain:
    "https://stuffedeyes.files.wordpress.com/2018/06/spain-2906824_960_720.png?w=1000",
  Finland: "/flags/finland.png",
  Poland: "/flags/poland.png",
  Belgium: "/flags/belgium.png",
  Taiwan: "/flags/taiwan.svg",
  Hongkong: "/flags/hongkong.png",
  Korea: "/flags/korea.png",
  China: "/flags/china.png",
};

const logo = {
  Fnatic: "/team/fnatic.webp",
  TPA: "/team/tpa.webp",
  SKT: "/team/skt.webp",
  SAMSUNG: "/team/samsung.webp",
  IG: "/team/ig.svg",
};

const positionImg = {
  TOP: top,
  JGL: jgl,
  MID: mid,
  BOT: bot,
  SPT: spt,
  SUB: "/position/sub.webp",
};

const Cards = () => {
  const { state } = useActions();

  return (
    <CardLayout>
      {state.map(({ id, name, year, teamColor, roster }) => {
        return (
          <CardWrap key={id}>
            <ItemFront teamcolor={teamColor}>
              <Image src={logo[name]}></Image>
              <TitleWrap teamcolor={teamColor}>
                <h1>{year}</h1>
                <h1 style={{ textAlign: "center" }}>
                  {name === "SKT" ? "SKT T1" : name}
                </h1>
              </TitleWrap>
            </ItemFront>
            <ItemBack teamcolor={teamColor}>
              <RosterWrap>
                {roster.map(({ id, position, name, country }) => {
                  return (
                    <PlayerList key={id}>
                      <PositionWrap>
                        <PositionImg src={positionImg[position]} alt="" />
                        <PositionName>{position}</PositionName>
                      </PositionWrap>
                      <PlayerWrap>
                        <CountryImg src={flags[country]} />
                        <PlayerName>{name}</PlayerName>
                      </PlayerWrap>
                    </PlayerList>
                  );
                })}
              </RosterWrap>
            </ItemBack>
          </CardWrap>
        );
      })}
    </CardLayout>
  );
};

export default Cards;

const CardLayout = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const CardBase = css`
  height: 450px;
  width: 300px;
  border-radius: 20px;
`;

const CardCommon = css`
  backface-visibility: hidden;
  position: absolute;
  transition: 1s;
`;

const CardWrap = styled.li`
  display: inline-grid;
  place-items: center;
  ${CardBase}
  cursor: pointer;
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
  perspective: 2000px;

  &:hover > :nth-child(1) {
    transform: perspective(2000px) rotateY(180deg);
  }
  &:hover > :nth-child(2) {
    transform: perspective(2000px) rotateY(0deg);
  }
`;

const ItemFront = styled.div`
  ${CardBase}
  ${CardCommon}
  grid-area: 1 / 1 / 1 / 1;
  grid-template-rows: 1fr 1fr;
  display: grid;
  cursor: pointer;
  transform: rotateY(0deg);
  overflow: hidden;
  background: ${({ teamcolor }) => teamcolor};

  & h1 {
    display: grid;
    place-items: center;
  }
`;

const TitleWrap = styled.div`
  background-color: ${({ teamcolor }) => teamcolor};
`;

const Image = styled.img`
  padding-top: 20px;
  width: 100%;
  height: 218px;
  object-fit: contain;
`;

const ItemBack = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  ${CardBase}
  ${CardCommon}
  background: ${({ teamcolor }) => teamcolor};

  transform: rotateY(180deg);
`;

const RosterWrap = styled.ul`
  width: 100%;
  height: 100%;
  /* display: grid;
  grid-template-rows: repeat(6, 1fr); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  padding-left: 0;
`;

const PlayerList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PositionWrap = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const PositionImg = styled.img`
  width: 20px;
`;

const PositionName = styled.span``;

const PlayerWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PlayerName = styled.span`
  line-height: 1;
`;

const CountryImg = styled.img`
  width: 20px;
  height: 14px;
  margin-right: 6px;
`;
