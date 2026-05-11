import { useState, useEffect, useCallback, useRef } from 'react';
import { Shield, Lock, Unlock, AlertTriangle, Ban, Terminal, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LogEntry {
  id: number;
  time: string;
  message: string;
  type: 'attempt' | 'warning' | 'blocked' | 'success';
}

export default function ActiveResponseDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'attacking' | 'warning' | 'blocking' | 'blocked'>('idle');
  const [attackerIP] = useState('185.234.72.19');
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [lockRotation, setLockRotation] = useState(0);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logIdRef = useRef(0);

  const getTimestamp = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  };

  const addLog = useCallback((message: string, type: LogEntry['type']) => {
    logIdRef.current += 1;
    setLogs(prev => [...prev.slice(-12), { id: logIdRef.current, time: getTimestamp(), message, type }]);
  }, []);

  const resetDemo = useCallback(() => {
    if (animationRef.current) clearTimeout(animationRef.current);
    setIsRunning(false);
    setAttempts(0);
    setPhase('idle');
    setLogs([]);
    setLockRotation(0);
    logIdRef.current = 0;
  }, []);

  const usernames = ['admin', 'root', 'administrator', 'user', 'test', 'support', 'info', 'webmaster'];
  const passwords = ['123456', 'password', 'admin123', 'qwerty', 'letmein', 'welcome1', 'pass123', 'abc123'];

  const startDemo = useCallback(() => {
    resetDemo();
    setIsRunning(true);
    setPhase('attacking');
    addLog('🔍 Wazuh Agent: Monitoraggio attivo su porta SSH (22)', 'success');

    let attemptCount = 0;
    const maxAttempts = 5;

    const runAttempt = () => {
      attemptCount++;
      setAttempts(attemptCount);

      const user = usernames[attemptCount % usernames.length];
      const pass = passwords[attemptCount % passwords.length];

      addLog(`❌ SSH login fallito da ${attackerIP} — user: ${user} pass: ${pass}`, 'attempt');

      if (attemptCount === 3) {
        animationRef.current = setTimeout(() => {
          setPhase('warning');
          addLog(`⚠️ ALERT: 3 tentativi falliti da ${attackerIP} — Soglia warning raggiunta`, 'warning');
          animationRef.current = setTimeout(runAttempt, 1200);
        }, 400);
        return;
      }

      if (attemptCount >= maxAttempts) {
        animationRef.current = setTimeout(() => {
          setPhase('blocking');
          addLog(`🚨 REGOLA 5763 TRIGGERED: Brute force SSH rilevato da ${attackerIP}`, 'warning');

          animationRef.current = setTimeout(() => {
            addLog(`🔒 ACTIVE RESPONSE: Esecuzione firewall-drop su ${attackerIP}`, 'blocked');

            let rot = 0;
            const lockInterval = setInterval(() => {
              rot += 15;
              setLockRotation(rot);
              if (rot >= 180) {
                clearInterval(lockInterval);
                setPhase('blocked');
                addLog(`🛡️ IP ${attackerIP} BLOCCATO — Ban attivo per 30 minuti`, 'blocked');

                animationRef.current = setTimeout(() => {
                  addLog(`✅ Notifica inviata al SOC via Slack e Email`, 'success');
                  animationRef.current = setTimeout(() => {
                    addLog(`📊 Evento registrato nel log SIEM — Incident #2847`, 'success');
                    setIsRunning(false);
                  }, 800);
                }, 800);
              }
            }, 30);
          }, 1000);
        }, 600);
        return;
      }

      animationRef.current = setTimeout(runAttempt, 900);
    };

    animationRef.current = setTimeout(runAttempt, 1000);
  }, [addLog, attackerIP, resetDemo]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  const getPhaseColor = () => {
    switch (phase) {
      case 'idle': return 'border-gray-500/30';
      case 'attacking': return 'border-yellow-500/50';
      case 'warning': return 'border-orange-500/50';
      case 'blocking': return 'border-red-500/70';
      case 'blocked': return 'border-red-500/50';
      default: return 'border-gray-500/30';
    }
  };

  const getProgressWidth = () => {
    return `${(attempts / 5) * 100}%`;
  };

  const getProgressColor = () => {
    if (attempts <= 2) return 'from-yellow-500 to-yellow-600';
    if (attempts <= 4) return 'from-orange-500 to-red-500';
    return 'from-red-500 to-red-700';
  };

  return (
    <div className={`rounded-3xl glass-effect border-2 transition-all duration-700 overflow-hidden ${getPhaseColor()}`}>
      {/* Header */}
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-red-400" />
          <h4 className="text-white font-bold text-lg">Simulazione Active Response</h4>
          <div className={`w-2.5 h-2.5 rounded-full ${
            phase === 'idle' ? 'bg-gray-500' :
            phase === 'blocked' ? 'bg-red-500' :
            'bg-green-500 animate-pulse'
          }`} />
        </div>
        <div className="flex gap-2">
          {phase === 'idle' || !isRunning ? (
            <Button
              size="sm"
              onClick={startDemo}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-xs px-4 py-2 rounded-xl font-semibold"
            >
              ▶ Avvia Simulazione
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={resetDemo}
              variant="outline"
              className="!bg-transparent border-white/20 text-white hover:!bg-white/10 text-xs px-4 py-2 rounded-xl"
            >
              ↺ Reset
            </Button>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-0">
        {/* Left Panel - Attack Visualization */}
        <div className="md:col-span-2 p-6 border-r border-white/10">
          {/* Attacker Info */}
          <div className="text-center mb-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 ${
              phase === 'blocked'
                ? 'bg-red-500/20 border border-red-500/50'
                : phase === 'warning' || phase === 'blocking'
                ? 'bg-orange-500/20 border border-orange-500/50 animate-pulse'
                : phase === 'attacking'
                ? 'bg-yellow-500/20 border border-yellow-500/50'
                : 'bg-white/5 border border-white/10'
            }`}>
              <span className={`font-mono text-sm font-bold transition-all duration-500 ${
                phase === 'blocked' ? 'text-red-400 line-through' : 'text-white'
              }`}>
                {attackerIP}
              </span>
              {phase === 'blocked' && <Ban className="w-4 h-4 text-red-500" />}
            </div>
          </div>

          {/* Lock Animation */}
          <div className="flex justify-center mb-6">
            <div className={`relative w-28 h-28 rounded-2xl flex items-center justify-center transition-all duration-700 ${
              phase === 'blocked'
                ? 'bg-red-500/20 border-2 border-red-500/60 shadow-lg shadow-red-500/30'
                : phase === 'warning' || phase === 'blocking'
                ? 'bg-orange-500/10 border-2 border-orange-500/40'
                : phase === 'attacking'
                ? 'bg-yellow-500/10 border-2 border-yellow-500/30'
                : 'bg-white/5 border-2 border-white/10'
            }`}>
              {phase === 'blocked' ? (
                <Lock className="w-14 h-14 text-red-500 transition-all duration-500" />
              ) : phase === 'blocking' ? (
                <div style={{ transform: `rotate(${lockRotation}deg)`, transition: 'transform 0.05s linear' }}>
                  <Unlock className="w-14 h-14 text-orange-400" />
                </div>
              ) : phase === 'warning' ? (
                <AlertTriangle className="w-14 h-14 text-orange-400 animate-bounce" />
              ) : phase === 'attacking' ? (
                <Unlock className="w-14 h-14 text-yellow-400 animate-pulse" />
              ) : (
                <Shield className="w-14 h-14 text-gray-500" />
              )}

              {/* Pulse ring for blocked state */}
              {phase === 'blocked' && (
                <>
                  <div className="absolute inset-0 rounded-2xl border-2 border-red-500/40 animate-ping" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <Ban className="w-3.5 h-3.5 text-white" />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Attempt Counter */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Tentativi di accesso</span>
              <span className={`font-bold font-mono text-lg ${
                attempts >= 5 ? 'text-red-400' : attempts >= 3 ? 'text-orange-400' : 'text-yellow-400'
              }`}>
                {attempts}/5
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div
                className={`h-3 rounded-full bg-gradient-to-r ${getProgressColor()} transition-all duration-500 relative`}
                style={{ width: getProgressWidth() }}
              >
                {attempts > 0 && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                )}
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>Soglia warning: 3</span>
              <span>Soglia blocco: 5</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="mt-6 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-500 ${
              phase === 'blocked'
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : phase === 'blocking'
                ? 'bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse'
                : phase === 'warning'
                ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                : phase === 'attacking'
                ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                : 'bg-white/5 text-gray-400 border border-white/10'
            }`}>
              {phase === 'blocked' && <><Ban className="w-4 h-4" /> IP BLOCCATO</>}
              {phase === 'blocking' && <><Lock className="w-4 h-4 animate-spin" /> BLOCCO IN CORSO...</>}
              {phase === 'warning' && <><AlertTriangle className="w-4 h-4" /> WARNING ATTIVO</>}
              {phase === 'attacking' && <><Unlock className="w-4 h-4" /> ATTACCO IN CORSO</>}
              {phase === 'idle' && <><Shield className="w-4 h-4" /> IN ATTESA</>}
            </div>
          </div>

          {/* Post-block info */}
          {phase === 'blocked' && (
            <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 animate-in fade-in">
              <div className="flex items-center gap-2 text-green-400 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Minaccia neutralizzata automaticamente
              </div>
              <p className="text-gray-400 text-[10px] mt-1">
                Tempo di risposta: &lt;30 secondi • Nessun intervento manuale richiesto
              </p>
            </div>
          )}
        </div>

        {/* Right Panel - Live Log */}
        <div className="md:col-span-3 flex flex-col">
          <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-500 text-xs ml-2 font-mono">wazuh-agent — /var/ossec/logs/active-responses.log</span>
          </div>
          <div
            ref={logContainerRef}
            className="flex-1 p-4 font-mono text-xs space-y-1.5 overflow-y-auto max-h-[340px] min-h-[340px] bg-black/30"
          >
            {logs.length === 0 && (
              <div className="flex items-center justify-center h-full text-gray-600">
                <p>Premi &quot;Avvia Simulazione&quot; per iniziare la demo...</p>
              </div>
            )}
            {logs.map((log) => (
              <div
                key={log.id}
                className={`flex items-start gap-2 py-1 px-2 rounded transition-all duration-300 animate-in slide-in-from-bottom-2 ${
                  log.type === 'blocked' ? 'bg-red-500/10' :
                  log.type === 'warning' ? 'bg-orange-500/10' :
                  log.type === 'success' ? 'bg-green-500/5' :
                  'bg-transparent'
                }`}
              >
                <span className="text-gray-600 flex-shrink-0">[{log.time}]</span>
                <span className={`${
                  log.type === 'blocked' ? 'text-red-400' :
                  log.type === 'warning' ? 'text-orange-400' :
                  log.type === 'success' ? 'text-green-400' :
                  'text-gray-400'
                }`}>
                  {log.message}
                </span>
              </div>
            ))}
            {isRunning && phase !== 'blocked' && (
              <div className="flex items-center gap-1 text-gray-600 py-1 px-2">
                <span className="animate-pulse">▊</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}