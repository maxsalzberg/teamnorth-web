"use client";
import { Container, Text, Button, Stack, Box, Group } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState, useRef, memo } from "react";

const SocialIcons = memo(() => {
  const [icons, setIcons] = useState<{
    FontAwesomeIcon: any;
    faDiscord: any;
    faSteam: any;
    faYoutube: any;
  } | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !shouldLoad) {
          setShouldLoad(true);
        }
      },
      { rootMargin: "200px" }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;

    const loadIcons = async () => {
      const [{ FontAwesomeIcon }, { faDiscord, faSteam, faYoutube }] =
        await Promise.all([
          import("@fortawesome/react-fontawesome"),
          import("@fortawesome/free-brands-svg-icons"),
        ]);

      setIcons({ FontAwesomeIcon, faDiscord, faSteam, faYoutube });
    };

    loadIcons();
  }, [shouldLoad]);

  if (!icons) {
    return (
      <Group
        ref={containerRef}
        justify="center"
        gap="clamp(16px, 3vw, 32px)"
        style={{ flexWrap: "wrap" }}
      >
        <div
          style={{ width: "24px", height: "24px", opacity: 0 }}
          aria-hidden="true"
        />
        <div
          style={{ width: "24px", height: "24px", opacity: 0 }}
          aria-hidden="true"
        />
        <div
          style={{ width: "24px", height: "24px", opacity: 0 }}
          aria-hidden="true"
        />
      </Group>
    );
  }

  const { FontAwesomeIcon, faDiscord, faSteam, faYoutube } = icons;

  return (
    <Group
      justify="center"
      gap="clamp(16px, 3vw, 32px)"
      style={{ flexWrap: "wrap" }}
    >
      <a
        href="https://discord.gg/cREDhsymBE"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Team North Discord"
      >
        <FontAwesomeIcon
          icon={faDiscord}
          style={{ fontSize: "clamp(18px, 3vw, 24px)" }}
          color="#ffffff"
        />
      </a>
      <a
        href="https://steamcommunity.com/sharedfiles/filedetails/?id=3359758575"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Team North Steam"
      >
        <FontAwesomeIcon
          icon={faSteam}
          style={{ fontSize: "clamp(18px, 3vw, 24px)" }}
          color="#ffffff"
        />
      </a>
      <a
        href="https://youtube.com/watch?v=PU8o9R-Vrfc"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Team North YouTube"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          style={{ fontSize: "clamp(18px, 3vw, 24px)" }}
          color="#ffffff"
        />
      </a>
    </Group>
  );
});

SocialIcons.displayName = "SocialIcons";

export default function Home() {
  useEffect(() => {
    const updateAppHeight = () => {
      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight ?? 0;
      document.documentElement.style.setProperty(
        "--app-height",
        `${viewportHeight}px`
      );
    };

    updateAppHeight();

    window.addEventListener("resize", updateAppHeight);
    window.addEventListener("orientationchange", updateAppHeight);
    window.visualViewport?.addEventListener("resize", updateAppHeight);

    return () => {
      window.removeEventListener("resize", updateAppHeight);
      window.removeEventListener("orientationchange", updateAppHeight);
      window.visualViewport?.removeEventListener("resize", updateAppHeight);
    };
  }, []);

  const appHeight = "var(--app-height, 100vh)";

  return (
    <Box
      component="main"
      style={{
        background: "linear-gradient(135deg, #0a0f1f 0%, #003a78 100%)",
        minHeight: appHeight,
        height: appHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <Container
        size="lg"
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "clamp(20px, 5vh, 80px) 16px",
          overflow: "hidden",
        }}
      >
        <Stack
          align="center"
          gap="clamp(15px, 3vh, 30px)"
          style={{ width: "100%", maxWidth: "100%" }}
        >
          <Text
            component="h1"
            fw={700}
            style={{
              fontSize: "clamp(32px, 8vw, 82px)",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "clamp(2px, 0.5vw, 5px)",
              lineHeight: 1.2,
            }}
            ta="center"
          >
            Team North
          </Text>
          <Image
            src="/img/roster.png"
            alt="Team North - Состав команды"
            width={600}
            height={400}
            style={{
              width: "100%",
              maxWidth: "min(600px, 90vw)",
              height: "auto",
              borderRadius: 12,
              objectFit: "contain",
            }}
            priority
            loading="eager"
            fetchPriority="high"
          />
          <Text
            component="p"
            style={{
              fontSize: "clamp(14px, 2vw, 20px)",
              color: "#ffffff",
              maxWidth: "min(700px, 90vw)",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
            ta="center"
          >
            Наш девиз – «Билет в компет». Уже 7 лет мы принимаем игроков любого
            уровня, воспитывая таланты со всего мира, главное, чтобы они умели
            говорить по-русски и соблюдали наш устав. Мы ценим тех, кто
            стремится к командной игре, учится на ошибках и адаптируется
            несмотря на трудности.
          </Text>
          <Button
            component="a"
            href="https://discord.gg/cREDhsymBE"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            radius="md"
            color="#00a1fe"
            style={{
              textTransform: "uppercase",
              padding: "clamp(10px, 2vh, 16px) clamp(20px, 4vw, 32px)",
              fontSize: "clamp(12px, 1.5vw, 16px)",
              whiteSpace: "normal",
              maxWidth: "90vw",
            }}
          >
            получить билет в компет
          </Button>
        </Stack>
      </Container>
      <Box
        component="footer"
        style={{ padding: "clamp(12px, 2vh, 24px) 16px", flexShrink: 0 }}
      >
        <Container size="lg">
          <Stack align="center" gap="sm">
            <Text c="#ffffff" style={{ fontSize: "clamp(10px, 1.5vw, 14px)" }}>
              © 2018-2026 Team North. Все фобы сожжены.
            </Text>
            <SocialIcons />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
