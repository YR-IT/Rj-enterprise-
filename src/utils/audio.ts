// Subtle, elegant synthesized audio clicks using Web Audio API

let audioCtx: AudioContext | null = null;
let isMuted = false;

export function toggleAudioMute(): boolean {
  isMuted = !isMuted;
  return isMuted;
}

export function getAudioMuted(): boolean {
  return isMuted;
}

export function playTactileClick(type: 'click' | 'pop' | 'switch' | 'success' = 'click') {
  if (isMuted || typeof window === 'undefined') return;

  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'pop') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.06);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'switch') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(420, now + 0.05);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'success') {
      // Gentle double chime
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.15);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.08); // A5
      gain2.gain.setValueAtTime(0.03, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.25);
    }
  } catch {
    // Audio contexts might be blocked until first user interaction; fail silently
  }
}
