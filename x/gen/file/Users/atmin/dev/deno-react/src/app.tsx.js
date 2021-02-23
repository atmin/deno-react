import React from "react";
const App = () => {
    const [count, setCount] = React.useState(0);
    return (React.createElement("div", null,
        React.createElement("h1", null, "Hello Deno Land! !"),
        React.createElement("button", { onClick: () => setCount(count + 1) }, "Click the \uD83E\uDD95"),
        React.createElement("p", null,
            "You clicked the \uD83E\uDD95 ",
            count,
            " times")));
};
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9Vc2Vycy9hdG1pbi9kZXYvZGVuby1yZWFjdC9zcmMvYXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFFMUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ2YsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVDLE9BQU8sQ0FDTDtRQUNFLHFEQUEyQjtRQUMzQixnQ0FBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsNkJBQXVCO1FBQ2pFOztZQUF1QixLQUFLO3FCQUFXLENBQ25DLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsR0FBRyxDQUFDIn0=