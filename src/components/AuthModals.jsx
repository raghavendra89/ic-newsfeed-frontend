import { useState } from 'react';
import SignUpModal from '@/components/SignUpModal.jsx';
import SignInModal from '@/components/SignInModal.jsx';

export default function AuthModals() {
  return (
    <>
      <SignUpModal />
      <SignInModal />
    </>
  );
}
