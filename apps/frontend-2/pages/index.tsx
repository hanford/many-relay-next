import { useLazyLoadQuery, graphql } from "react-relay";

export default function () {
  const data = useLazyLoadQuery(
    graphql`
      query pages2Query($userId: String!) {
        user(id: $userId) {
          id
        }
      }
    `,
    { userId: "foo" }
  );

  return <div>Hello</div>;
}
