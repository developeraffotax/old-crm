import React from "react";
import { useAuth } from "../../context/authContext";
import Layout from "../../components/Loyout/Layout";

export default function Dashboard() {
  const { auth } = useAuth();
  return (
    <Layout title="CRM_Dashboard">
      <div>
        <pre>{JSON.stringify(auth, 4, 4)}</pre>
      </div>
    </Layout>
  );
}
