import { Box, Button } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";

import { useGetList, useTranslate, useIsDataLoaded } from "react-admin";

import { stringify } from "query-string";

import CardWithIcon from "./CardWithIcon";

const PendingReviews = () => {
  const translate = useTranslate();
  const {
    data: reviews,
    total,
    isLoading,
  } = useGetList<any>("reviews", {
    filter: { status: "pending" },
    sort: { field: "date", order: "DESC" },
    pagination: { page: 1, perPage: 100 },
  });

  // Poor man's Suspense: hide the content until all the data is loaded,
  // including the reference customers.
  // As ReferenceField aggregates the calls to reference customers,
  // if the first customer is loaded, then all the customers are loaded.
  const isCustomerDataLoaded = useIsDataLoaded(
    ["customers", "getMany", { ids: [String(reviews?.[0]?.userId)] }],
    { enabled: !isLoading && reviews && reviews.length > 0 }
  );
  const display = isLoading || !isCustomerDataLoaded ? "none" : "block";

  return (
    <CardWithIcon
      to={{
        pathname: "/reviews",
        search: stringify({
          filter: JSON.stringify({ status: "pending" }),
        }),
      }}
      icon={CommentIcon}
      title={translate("pos.dashboard.pending_reviews")}
      subtitle={total}
    >
      <Box flexGrow={1}>&nbsp;</Box>
      <Button
        sx={{ borderRadius: 0 }}
        component={Link}
        to="/reviews"
        size="small"
        color="primary"
      >
        <Box p={1} sx={{ color: "primary.main" }}>
          {translate("pos.dashboard.all_reviews")}
        </Box>
      </Button>
    </CardWithIcon>
  );
};

export default PendingReviews;
