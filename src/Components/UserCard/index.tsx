import React from "react";

type UserCardProps = {
  name: string;
  companyName: string;
  image: string;
  selected?: boolean;
};

const UserCard: React.FC<UserCardProps> = ({
  name,
  companyName,
  image,
  selected = false,
}) => {
  return (
    <div
      style={{
        minWidth: "224px",
        height: "68px",
        padding: "1px", // simulate border width
        borderRadius: "20px",
        background:
          "linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 0.000015) 50.59%, rgba(255, 255, 255, 0.000015) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)",
        boxShadow: selected
          ? `2px 4px 16px 0px rgba(248, 248, 248, 0.06) inset,
             0px 24px 32px -12px var(--NeutralNeutral410)`
          : undefined,
        backdropFilter: selected ? "blur(32px)" : undefined,
        WebkitBackdropFilter: selected ? "blur(32px)" : undefined,
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "12px 16px 12px 12px",
          borderRadius: "19px", // slightly smaller to stay inside outer border
          background: selected
            ? "var(--neutral-neutral-210, rgba(248, 248, 248, 0.1))"
            : "var(--neutral-neutral-22, rgba(248, 248, 248, 0.02))",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50px",
            objectFit: "cover",
          }}
        />
        <div>
          <div
            style={{
              fontFamily: "Rubik, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "var(--Text-Text-Primary, rgba(248, 248, 248, 0.95))",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: "Rubik, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "16px",
              color: "var(--Text-Tertiary, rgba(248, 248, 248, 0.5))",
            }}
          >
            {companyName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
