import { UserButton } from "@clerk/nextjs";

export default function HeaderUserProfile() {
  return (
    <>
      <div className="hidden min-[370px]:flex">
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonOuterIdentifier: {
                color: "white",
                fontSize: "16px",
              },
            },
          }}
        />
      </div>
      <div className="flex min-[370px]:hidden">
        <UserButton />
      </div>
    </>
  );
}
