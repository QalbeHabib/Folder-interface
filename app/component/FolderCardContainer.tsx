const FolderWrapper = ({
  children,
  ...props
}: React.ComponentProps<"svg"> & { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bc83769af253c52bbc682e_Preview.webp')",
        }}
        className="bg-cover h-full w-full bg-no-repeat bg-center absolute inset-0 "
      />

      <svg
        viewBox="0 0 832 596"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
        {...props}
      >
        <path
          d="M0 27.5C2.869 9.86825 11 2 29 0L0 8.5026e-05V27.5Z"
          fill="#02021E"
        />
        <path
          d="M27.5 595C9.8683 592.131 2.00005 584 4.87389e-05 566L-4.54896e-08 594C1.34763e-08 595.349 0.000197886 595 0.000197886 595L27.5 595Z"
          fill="#02021E"
        />
        <path
          d="M832 567C829.131 584.632 821 593 803 595L831 595L832 595L832 567Z"
          fill="#02021E"
        />
        <path
          d="M262.916 12.2483C254.958 4.40752 243.166 2.17877 229 0H832V74C824.96 48.8689 816.5 37.5 790.603 31.6414C788 28.5 314.867 34.9538 295.834 31.6414C276.801 28.3289 273.48 23.3397 262.916 12.2483Z"
          fill="#02021E"
        />
        <foreignObject x="0" y="0" width="832" height="596">
          {children}
        </foreignObject>
      </svg>
    </div>
  );
};

export default FolderWrapper;
