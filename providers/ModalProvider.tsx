"use client";

import Modal from "@/components/Modal";
import { FC, useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Modal
        title="Test Modal"
        description="Test desc"
        isOpen
        onChange={() => {}}>
        Test children
      </Modal>
    </>
  );
};

export default ModalProvider;
